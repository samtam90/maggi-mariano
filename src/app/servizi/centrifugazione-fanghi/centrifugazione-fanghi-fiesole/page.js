import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Fiesole",
  canonical: links.servizi["centrifugazione-fanghi"]["fiesole"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Fiesole",
  locationNames: { label: "Fiesole", href: "fiesole" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
