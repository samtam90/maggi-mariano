import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Penna in Teverina",
  canonical: links.servizi["centrifugazione-fanghi"]["penna-in-teverina"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Penna in Teverina",
  locationNames: { label: "Penna in Teverina", href: "penna-in-teverina" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["terni"],
      name: "Terni",
  }),
});
