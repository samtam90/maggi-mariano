import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Vinci",
  canonical: links.servizi["disidratazione-fanghi"]["vinci"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Vinci",
  locationNames: { label: "Vinci", href: "vinci" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
