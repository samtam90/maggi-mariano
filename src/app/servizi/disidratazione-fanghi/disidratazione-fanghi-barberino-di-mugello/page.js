import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Barberino di Mugello",
  canonical: links.servizi["disidratazione-fanghi"]["barberino-di-mugello"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Barberino di Mugello",
  locationNames: { label: "Barberino di Mugello", href: "barberino-di-mugello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
