import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Centrifugazione fanghi Calenzano",
  canonical: links.servizi["centrifugazione-fanghi"]["calenzano"],
});
export default withBaseProps({
  title: "Centrifugazione fanghi Calenzano",
  locationNames: { label: "Calenzano", href: "calenzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["centrifugazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
