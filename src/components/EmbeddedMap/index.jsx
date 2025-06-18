import React, { memo } from "react";
import TitleWithOpaqueSubtitle, {
  Title,
  ClassNames as TitleClassNames,
} from "../TitleWithOpaqueSubtitle";
import { HeaderComponent, twClsx } from "../../misc/functions";

function makeLabel(title, subtitle) {
  return `${title.left} ${title.right} ${subtitle}`;
}

/**
 * @returns
 * @param {{
 *      title: Title,
 *      subtitle: string,
 *      src: string,
 *      classNames?: {
 *          map?: string,
 *          title?: TitleClassNames
 *      },
 *      titleHeadingElement?: HeaderComponent,
 *      dimensions: {width: number, height: number},
 *      label?: string,
 *      loading?: "eager" | "lazy"
 * }} param0
 */
function EmbeddedMap({
  title,
  subtitle,
  src,
  classNames,
  titleHeadingElement,
  dimensions,
  label,
  loading = "lazy",
}) {
  label = label || makeLabel(title, subtitle);
  return (
    <section>
      <TitleWithOpaqueSubtitle
        title={title}
        titleHeadingElement={titleHeadingElement}
        subtitle={subtitle}
        classNames={{
          ...classNames?.title,
          root: twClsx("mb-8", classNames?.title?.root),
        }}
      />
      <iframe
        src={src}
        width={dimensions.width}
        height={dimensions.height}
        className={twClsx("max-w-full", classNames?.map)}
        aria-label={label}
        title={label}
        loading={loading}
      />
    </section>
  );
}

export default memo(EmbeddedMap);
