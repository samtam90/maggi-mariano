import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Certaldo",
  canonical: links.servizi["disidratazione-fanghi"]["certaldo"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Certaldo",
  locationNames: { label: "Certaldo", href: "certaldo" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
