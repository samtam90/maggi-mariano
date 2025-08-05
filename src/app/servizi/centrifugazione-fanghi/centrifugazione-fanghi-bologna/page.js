import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bologna",
  canonical: links.servizi["centrifugazione-fanghi"]["bologna"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bologna",
  locationNames: { label: "Bologna", href: "bologna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["bologna"],
      name: "Bologna",
  }),
});
