import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Valfabbrica",
  canonical: links.servizi["centrifugazione-fanghi"]["valfabbrica"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Valfabbrica",
  locationNames: { label: "Valfabbrica", href: "valfabbrica" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
