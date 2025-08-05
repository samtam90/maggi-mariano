import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montegabbione",
  canonical: links.servizi["centrifugazione-fanghi"]["montegabbione"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montegabbione",
  locationNames: { label: "Montegabbione", href: "montegabbione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
