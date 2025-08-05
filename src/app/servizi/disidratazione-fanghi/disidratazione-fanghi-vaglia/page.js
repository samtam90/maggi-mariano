import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Vaglia",
  canonical: links.servizi["disidratazione-fanghi"]["vaglia"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Vaglia",
  locationNames: { label: "Vaglia", href: "vaglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
