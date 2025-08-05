import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Borgo San Lorenzo",
  canonical: links.servizi["centrifugazione-fanghi"]["borgo-san-lorenzo"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Borgo San Lorenzo",
  locationNames: { label: "Borgo San Lorenzo", href: "borgo-san-lorenzo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
