import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Sesto Fiorentino",
  canonical: links.servizi["disidratazione-fanghi"]["sesto-fiorentino"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Sesto Fiorentino",
  locationNames: { label: "Sesto Fiorentino", href: "sesto-fiorentino" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
