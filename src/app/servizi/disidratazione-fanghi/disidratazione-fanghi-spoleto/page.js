import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Spoleto",
  canonical: links.servizi["disidratazione-fanghi"]["spoleto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Spoleto",
  locationNames: { label: "Spoleto", href: "spoleto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
