import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Ferentillo",
  canonical: links.servizi["centrifugazione-fanghi"]["ferentillo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Ferentillo",
  locationNames: { label: "Ferentillo", href: "ferentillo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
