import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Barberino di Mugello",
  canonical: links.servizi["centrifugazione-fanghi"]["barberino-di-mugello"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Barberino di Mugello",
  locationNames: { label: "Barberino di Mugello", href: "barberino-di-mugello" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
