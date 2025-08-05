import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Barberino Tavarnelle",
  canonical: links.servizi["disidratazione-fanghi"]["barberino-tavarnelle"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Barberino Tavarnelle",
  locationNames: { label: "Barberino Tavarnelle", href: "barberino-tavarnelle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
