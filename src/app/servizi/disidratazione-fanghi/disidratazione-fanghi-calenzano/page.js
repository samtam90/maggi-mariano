import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Calenzano",
  canonical: links.servizi["disidratazione-fanghi"]["calenzano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Calenzano",
  locationNames: { label: "Calenzano", href: "calenzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
