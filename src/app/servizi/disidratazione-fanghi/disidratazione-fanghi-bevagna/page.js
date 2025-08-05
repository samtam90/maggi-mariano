import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Bevagna",
  canonical: links.servizi["disidratazione-fanghi"]["bevagna"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Bevagna",
  locationNames: { label: "Bevagna", href: "bevagna" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
