import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bologna",
  canonical: links.servizi["pulizia-fognature"]["bologna"],
});
export default withBaseProps({
  title: "Pulizia fognature Bologna",
  locationNames: { label: "Bologna", href: "bologna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
