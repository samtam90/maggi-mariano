import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Montespertoli",
  canonical: links.servizi["disidratazione-fanghi"]["montespertoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Montespertoli",
  locationNames: { label: "Montespertoli", href: "montespertoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
