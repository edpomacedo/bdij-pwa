// ServiceStatus.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ServiceStatus from "./ServiceStatus";

test("renders correctly with 'Operacional' status", async () => {
  render(<ServiceStatus serviceName="Exemplo" url="/api/status" />);

  // Aguarde até que o componente renderize completamente
  await waitFor(() => {
    expect(screen.getByText(/Exemplo:/)).toBeInTheDocument();
    expect(screen.getByText(/Aguardando|Operacional/)).toBeInTheDocument();
  });
});

test("renders correctly with 'Indisponível' status", async () => {
  render(<ServiceStatus serviceName="Exemplo" url="/api/unavailable" />);

  // Aguarde até que o componente renderize completamente
  await waitFor(() => {
    expect(screen.getByText(/Exemplo:/)).toBeInTheDocument();
    expect(screen.getByText(/Erro ao verificar o status|Indisponível/)).toBeInTheDocument();
  });
});
