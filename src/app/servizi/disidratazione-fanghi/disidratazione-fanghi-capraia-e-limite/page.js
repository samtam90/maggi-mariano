import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Capraia e Limite",
  canonical: links.servizi["disidratazione-fanghi"]["capraia-e-limite"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Capraia e Limite",
  locationNames: { label: "Capraia e Limite", href: "capraia-e-limite" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
