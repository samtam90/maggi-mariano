import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Orvieto",
  canonical: links.servizi["disidratazione-fanghi"]["orvieto"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Orvieto",
  locationNames: { label: "Orvieto", href: "orvieto" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
