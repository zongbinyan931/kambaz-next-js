import type { ReactNode } from "react";
import KambazNavigation from "./Navigation";

export default function KambazLayout({ children }: { children: ReactNode }) {
  return (
    <table width="100%">
      <tbody>
        <tr>
          <td valign="top" width="200">
            <KambazNavigation />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
