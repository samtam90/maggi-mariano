import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Cannara",
  canonical: links.servizi["centrifugazione-fanghi"]["cannara"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Cannara",
  locationNames: { label: "Cannara", href: "cannara" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
