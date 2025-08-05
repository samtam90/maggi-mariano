import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Bologna",
  canonical: links.servizi["frantoio-mobile-inerti"]["bologna"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Bologna",
  locationNames: { label: "Bologna", href: "bologna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
