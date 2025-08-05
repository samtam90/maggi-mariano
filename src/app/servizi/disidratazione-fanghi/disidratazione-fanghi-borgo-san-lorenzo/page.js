import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Borgo San Lorenzo",
  canonical: links.servizi["disidratazione-fanghi"]["borgo-san-lorenzo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Borgo San Lorenzo",
  locationNames: { label: "Borgo San Lorenzo", href: "borgo-san-lorenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
