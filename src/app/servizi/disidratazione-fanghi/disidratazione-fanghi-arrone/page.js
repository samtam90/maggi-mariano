import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Arrone",
  canonical: links.servizi["disidratazione-fanghi"]["arrone"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Arrone",
  locationNames: { label: "Arrone", href: "arrone" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
