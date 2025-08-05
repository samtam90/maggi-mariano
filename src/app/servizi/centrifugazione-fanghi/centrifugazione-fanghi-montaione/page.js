import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Montaione",
  canonical: links.servizi["centrifugazione-fanghi"]["montaione"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Montaione",
  locationNames: { label: "Montaione", href: "montaione" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
