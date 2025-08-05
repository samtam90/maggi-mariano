import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Empoli",
  canonical: links.servizi["disidratazione-fanghi"]["empoli"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Empoli",
  locationNames: { label: "Empoli", href: "empoli" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
