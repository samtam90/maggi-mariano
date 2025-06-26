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
 *      loading?: "eager" | "lazy",
 *      disabled?: boolean
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
  disabled,
  disabledMessage,
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
          root: twClsx("mb-6", classNames?.title?.root),
        }}
      />
      {disabled ? (
        <div
          style={dimensions}
          role="presentation"
          className="max-w-full border rounded-lg border-gray-400 flex items-center justify-center"
        >
          <p className="text-sm text-center text-gray-600 font-title">
            {disabledMessage}
          </p>
        </div>
      ) : (
        <iframe
          src={src}
          width={dimensions.width}
          height={dimensions.height}
          className={twClsx("max-w-full", classNames?.map)}
          aria-label={label}
          title={label}
          loading={loading}
        />
      )}
    </section>
  );
}

export default memo(EmbeddedMap);
