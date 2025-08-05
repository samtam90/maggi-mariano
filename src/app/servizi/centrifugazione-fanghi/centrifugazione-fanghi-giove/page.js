import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Giove",
  canonical: links.servizi["centrifugazione-fanghi"]["giove"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Giove",
  locationNames: { label: "Giove", href: "giove" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
