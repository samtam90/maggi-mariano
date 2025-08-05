import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi San Casciano in Val di Pesa",
  canonical: links.servizi["disidratazione-fanghi"]["san-casciano-in-val-di-pesa"],
});
export default withBaseProps({
  title: "Disidratazione fanghi San Casciano in Val di Pesa",
  locationNames: { label: "San Casciano in Val di Pesa", href: "san-casciano-in-val-di-pesa" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
