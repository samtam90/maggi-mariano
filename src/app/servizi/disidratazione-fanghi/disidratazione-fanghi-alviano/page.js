import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Alviano",
  canonical: links.servizi["disidratazione-fanghi"]["alviano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Alviano",
  locationNames: { label: "Alviano", href: "alviano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
