import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Campi Bisenzio",
  canonical: links.servizi["disidratazione-fanghi"]["campi-bisenzio"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Campi Bisenzio",
  locationNames: { label: "Campi Bisenzio", href: "campi-bisenzio" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
