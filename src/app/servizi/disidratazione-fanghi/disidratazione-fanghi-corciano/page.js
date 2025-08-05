import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Corciano",
  canonical: links.servizi["disidratazione-fanghi"]["corciano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Corciano",
  locationNames: { label: "Corciano", href: "corciano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
