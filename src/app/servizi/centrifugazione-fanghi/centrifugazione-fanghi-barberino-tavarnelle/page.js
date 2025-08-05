import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Barberino Tavarnelle",
  canonical: links.servizi["centrifugazione-fanghi"]["barberino-tavarnelle"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Barberino Tavarnelle",
  locationNames: { label: "Barberino Tavarnelle", href: "barberino-tavarnelle" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
