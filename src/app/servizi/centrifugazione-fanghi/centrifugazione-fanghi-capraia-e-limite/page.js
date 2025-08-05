import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Capraia e Limite",
  canonical: links.servizi["centrifugazione-fanghi"]["capraia-e-limite"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Capraia e Limite",
  locationNames: { label: "Capraia e Limite", href: "capraia-e-limite" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
