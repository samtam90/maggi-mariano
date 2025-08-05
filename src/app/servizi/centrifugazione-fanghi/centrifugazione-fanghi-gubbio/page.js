import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Gubbio",
  canonical: links.servizi["centrifugazione-fanghi"]["gubbio"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Gubbio",
  locationNames: { label: "Gubbio", href: "gubbio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
