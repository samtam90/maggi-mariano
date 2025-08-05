import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Guardea",
  canonical: links.servizi["centrifugazione-fanghi"]["guardea"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Guardea",
  locationNames: { label: "Guardea", href: "guardea" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
