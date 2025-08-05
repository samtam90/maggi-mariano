import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Bastia Umbra",
  canonical: links.servizi["centrifugazione-fanghi"]["bastia-umbra"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Bastia Umbra",
  locationNames: { label: "Bastia Umbra", href: "bastia-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
