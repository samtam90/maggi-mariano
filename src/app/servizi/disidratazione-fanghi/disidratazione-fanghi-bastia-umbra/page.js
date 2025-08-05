import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bastia Umbra",
  canonical: links.servizi["disidratazione-fanghi"]["bastia-umbra"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bastia Umbra",
  locationNames: { label: "Bastia Umbra", href: "bastia-umbra" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
