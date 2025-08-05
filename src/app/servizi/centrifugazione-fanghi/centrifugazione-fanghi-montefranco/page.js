import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montefranco",
  canonical: links.servizi["centrifugazione-fanghi"]["montefranco"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montefranco",
  locationNames: { label: "Montefranco", href: "montefranco" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
