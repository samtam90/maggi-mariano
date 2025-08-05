import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Fiesole",
  canonical: links.servizi["disidratazione-fanghi"]["fiesole"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Fiesole",
  locationNames: { label: "Fiesole", href: "fiesole" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
