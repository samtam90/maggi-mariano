import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Cuneo",
  canonical: links.servizi["disidratazione-fanghi"]["cuneo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Cuneo",
  locationNames: { label: "Cuneo", href: "cuneo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["cuneo"],
      name: "Cuneo",
  }),
});
