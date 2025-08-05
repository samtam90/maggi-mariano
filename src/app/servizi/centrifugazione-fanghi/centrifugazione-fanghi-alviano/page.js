import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Alviano",
  canonical: links.servizi["centrifugazione-fanghi"]["alviano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Alviano",
  locationNames: { label: "Alviano", href: "alviano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
