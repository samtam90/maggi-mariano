import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montaione",
  canonical: links.servizi["disidratazione-fanghi"]["montaione"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montaione",
  locationNames: { label: "Montaione", href: "montaione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
