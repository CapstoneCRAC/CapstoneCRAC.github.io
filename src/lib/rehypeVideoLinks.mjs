const VIDEO_LINK_RE = /^video\s*:\s*(.+)$/i;

function textValue(node) {
  if (!node) return "";
  if (node.type === "text") return node.value ?? "";
  if (!Array.isArray(node.children)) return "";
  return node.children.map(textValue).join("");
}

function isVideoHref(href) {
  return /\.(mp4|webm|ogg)(?:[?#].*)?$/i.test(href);
}

function mediaTypeFromHref(href) {
  if (/\.webm(?:[?#].*)?$/i.test(href)) return "video/webm";
  if (/\.ogg(?:[?#].*)?$/i.test(href)) return "video/ogg";
  return "video/mp4";
}

function transformNode(node) {
  if (!node || !Array.isArray(node.children)) return;

  node.children = node.children.map((child) => {
    if (child?.type !== "element" || child.tagName !== "p") {
      transformNode(child);
      return child;
    }

    const meaningfulChildren = child.children.filter(
      (item) => item.type !== "text" || item.value.trim() !== ""
    );

    if (meaningfulChildren.length !== 1) {
      transformNode(child);
      return child;
    }

    const link = meaningfulChildren[0];
    const href = link?.properties?.href;
    const label = textValue(link).trim();
    const match = label.match(VIDEO_LINK_RE);

    if (link?.tagName !== "a" || typeof href !== "string" || !match || !isVideoHref(href)) {
      transformNode(child);
      return child;
    }

    const caption = match[1].trim();

    return {
      type: "element",
      tagName: "figure",
      properties: { className: ["inline-video"] },
      children: [
        {
          type: "element",
          tagName: "video",
          properties: {
            controls: true,
            preload: "metadata",
            ariaLabel: `${caption} video`
          },
          children: [
            {
              type: "element",
              tagName: "source",
              properties: {
                src: href,
                type: mediaTypeFromHref(href)
              },
              children: []
            },
            {
              type: "text",
              value: "Video playback is unavailable in this browser."
            }
          ]
        },
        {
          type: "element",
          tagName: "figcaption",
          properties: {},
          children: [{ type: "text", value: caption }]
        }
      ]
    };
  });
}

export default function rehypeVideoLinks() {
  return (tree) => transformNode(tree);
}
