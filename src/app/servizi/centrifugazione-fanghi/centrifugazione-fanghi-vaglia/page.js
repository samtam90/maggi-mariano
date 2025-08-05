import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Vaglia",
  canonical: links.servizi["centrifugazione-fanghi"]["vaglia"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Vaglia",
  locationNames: { label: "Vaglia", href: "vaglia" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
