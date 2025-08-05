import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Ferentillo",
  canonical: links.servizi["disidratazione-fanghi"]["ferentillo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Ferentillo",
  locationNames: { label: "Ferentillo", href: "ferentillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
