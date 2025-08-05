import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Scheggino",
  canonical: links.servizi["disidratazione-fanghi"]["scheggino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Scheggino",
  locationNames: { label: "Scheggino", href: "scheggino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["perugia"],
      name: "Perugia",
  }),
});
