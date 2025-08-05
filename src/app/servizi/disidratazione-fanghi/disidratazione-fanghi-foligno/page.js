import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Foligno",
  canonical: links.servizi["disidratazione-fanghi"]["foligno"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Foligno",
  locationNames: { label: "Foligno", href: "foligno" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
